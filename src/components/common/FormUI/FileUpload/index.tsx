import { ChangeEvent, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';
import useCustomUpload from '@Hooks/useCustomUpload';
import { FlexColumn, FlexRow } from '@Components/common/Layouts';
import Icon from '@Components/common/Icon';
import Image from '@Components/RadixComponents/Image';
import { UseFormPropsType } from '@Components/DataManagement/MultiStepForm/types';
import Input from '../Input';

type FileType = File & {
  lastModifiedDate: Date;
};

type UplodedFilesType = {
  id: string;
  previewUrl: string;
  file: FileType;
}[];

type FileEvent = ChangeEvent<HTMLInputElement> & {
  target: EventTarget & { files: FileList };
};

interface IFileUploadProps extends UseFormPropsType {
  name: string;
}

export default function FileUpload({
  name,
  register,
  setValue,
}: IFileUploadProps) {
  const [inputRef, onFileUpload] = useCustomUpload();
  const [uploadedFiles, setUploadedFiles] = useState<UplodedFilesType>([]);

  useEffect(() => {
    register(name);
  }, [register, name]);

  useEffect(() => {
    setValue(name, uploadedFiles);
  }, [uploadedFiles, setValue, name]);

  const handleFileUpload = (event: FileEvent) => {
    const { files } = event.target;
    const uploaded = Array.from(files).map(file => ({
      id: uuidv4(),
      previewURL: URL.createObjectURL(file),
      file,
    }));

    //   @ts-ignore
    setUploadedFiles(prev => [...prev, ...uploaded]);
  };

  function downloadBlob(blobURL: string, fileName: string) {
    const link = document.createElement('a');
    link.href = blobURL;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleDeleteFile = (id: string) => {
    const updatedData = uploadedFiles.filter(file => file.id !== id);
    setUploadedFiles(updatedData);
  };

  return (
    <FlexColumn gap={2}>
      <FlexColumn
        className="naxatw-cursor-pointer naxatw-items-center naxatw-justify-center naxatw-rounded-lg naxatw-border-2
          naxatw-border-dashed  naxatw-bg-grey-100 naxatw-py-2.5 "
        //   @ts-ignore
        onClick={onFileUpload}
      >
        <Icon
          name="cloud_upload"
          className="naxatw-text-3xl naxatw-text-primary-400 "
        />
        <p className="naxatw-text-xs naxatw-text-grey-600">
          Please upload picture (Jpeg, Png file format)
        </p>
        <Input
          ref={inputRef}
          type="file"
          className="naxatw-hidden"
          multiple
          onChange={handleFileUpload}
        />
      </FlexColumn>
      <FlexColumn
        gap={2}
        className="scrollbar naxatw-max-h-52 naxatw-overflow-auto "
      >
        {/* @ts-ignore */}
        {uploadedFiles.map(({ file, id, previewURL }) => (
          <FlexRow
            key={id}
            className="naxatw-items-center naxatw-justify-between naxatw-rounded-lg naxatw-border naxatw-px-4 naxatw-py-2"
          >
            <FlexRow gap={4} className="naxatw-items-center">
              <Image src={previewURL} width={40} alt="" />
              <FlexColumn>
                <h5 className="naxatw-text-sm">{file.name}</h5>
                <p className="naxatw-text-xs naxatw-text-grey-600">
                  Uploaded on
                  {format(new Date(file.lastModifiedDate), 'MMM dd yyyy')}
                </p>
              </FlexColumn>
            </FlexRow>
            <FlexRow gap={2}>
              <Icon
                name="download"
                className="naxatw-text-grey-400"
                onClick={() => downloadBlob(previewURL, file.name)}
              />
              <Icon
                name="delete"
                className="naxatw-text-red-500"
                onClick={() => handleDeleteFile(id)}
              />
            </FlexRow>
          </FlexRow>
        ))}
      </FlexColumn>
    </FlexColumn>
  );
}

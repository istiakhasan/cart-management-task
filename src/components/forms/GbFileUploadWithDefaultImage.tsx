import { getErrorMessageByPropertyName } from "@/util/schema-validator";
import { LoadingOutlined } from "@ant-design/icons";
import { Image, message, Upload } from "antd";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG files!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must be smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

type ImageUploadProps = {
  name: string;
  title?: string;
  defaultImage?: string; // New prop for default image
};

const GbFileUploadWithDefaultImage = ({ name, title, defaultImage }: ImageUploadProps) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | undefined>(defaultImage);
  const { setValue, formState: { errors } } = useFormContext();

  useEffect(() => {
    if (defaultImage) {
      setImageUrl(defaultImage);
    }
  }, [defaultImage]);

  const handleChange: UploadProps["onChange"] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      setValue(name, info.file.originFileObj);
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  const uploadButton = (
    <div>
      {title && <p className="my-[10px]">{title}</p>}
      {loading ? <LoadingOutlined /> : <i className="ri-image-add-line text-[24px]"></i>}
      <div className="text-[#343434] text-[10px] font-[500]">
        <span className="text-[#4E9EFC] font-[500] text-[10px] underline">Click to upload</span> OR
      </div>
      <div className="text-[#343434] text-[10px] font-[500]">drag and drop</div>
    </div>
  );

  return (
    <>
      <Upload
        name={name}
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="/api/file"
        // beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="avatar"
            width={100}
            height={100}
            preview={false}
          />
        ) : (
          uploadButton
        )}
      </Upload>
      <small style={{ color: "red" }}>{errorMessage}</small>
    </>
  );
};

export default GbFileUploadWithDefaultImage;

import { RichText as CMSRichText } from "@graphcms/rich-text-react-renderer";
import { ComponentProps } from "react";

type RichTextProps = ComponentProps<typeof CMSRichText>;

export const RichText = ({ ...props }: RichTextProps) => {
  return <CMSRichText {...props} renderers={{
    bold: ({ children }) => (
        <b className="text-emerald-500 font-medium ">{children}</b>
    )
  }}/>;
};

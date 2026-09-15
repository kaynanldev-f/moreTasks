export default function TextArea({
  ...rest
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className="resize-none h-40 rounded-lg outline-none p-2 bg-[#fafafa] text-background w-full placeholder:text-background"
      {...rest}
    ></textarea>
  );
}

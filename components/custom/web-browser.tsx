import { Safari } from "../magicui/safari";

export function WebBrowserWidget() {
  return (
    <div className="relative">
      <Safari url="digitec3000.com" className="size-full" imageSrc="./website.png"/>
    </div>
  );
}

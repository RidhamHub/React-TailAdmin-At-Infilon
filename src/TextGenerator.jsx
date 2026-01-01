import AiAssTitle from "./AiAssTitle";
import AiAssRightBox from "./AiAssRightBox";
import AiAssPromptBox from "./AiAssPromptBox";

export default function TextGenerator() {
  return (
    <div>
      <AiAssTitle title="Text Generator" />

      <div className="flex ">
        {/* left chat Box */}
        <div className="w-[80%]  p-10  text-xs bg-[#F9FAFB]   ">
          <div className=" flex-1 h-40  overflow-y-auto  ">
            <div className="flex justify-end pb-10">
              <p className=" rounded-xl rounded-tr-xs max-w-120  px-4 py-3 bg-blue-100">
                Can you generate some random, creative, and engaging placeholder
                text for me? It doesn't need to follow any specific
                structure—just something fun or interesting to fill space
                temporarily.
              </p>
            </div>
            <div className="flex justify-start pb-10">
              <p className=" rounded-xl rounded-tl-xs max-w-120  px-4 py-3 bg-gray-100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                et varius tortor. Aenean dui magna, vehicula in lacinia non,
                euismod sed odio. Aliquam erat volutpat. Integer iaculis eu
                tellus vel tincidunt. Sed sed dictum orci, in pretium erat.
                Proin ut mi a arcu mollis hendrerit. Ut id est finibus, egestas
                tellus ac, pharetra ante.
              </p>
            </div>
            <div className="flex justify-end pb-10">
              <p className=" rounded-xl rounded-tr-xs max-w-120  px-4 py-3 bg-blue-100">
                I'm looking for a block of random, imaginative text—something
                quirky or unexpected to use as placeholder content.
              </p>
            </div>
            <div className="flex justify-start pb-10">
              <p className="rounded-xl rounded-tl-xs max-w-120  px-4 py-3 bg-gray-100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                et varius tortor. Aenean dui magna, vehicula in lacinia non,
                euismod sed odio. Aliquam erat volutpat. Integer iaculis eu
                tellus vel tincidunt. Sed sed dictum orci, in pretium erat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                et varius tortor.
              </p>
            </div>
          </div>
          {/* prompt box */}
          <AiAssPromptBox />
        </div>
        {/* right box */}
        <AiAssRightBox />
      </div>
    </div>
  );
}

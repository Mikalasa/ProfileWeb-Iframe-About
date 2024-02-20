import TimeLine from "./component/common/TimeLine";
import {SparklesPreview} from "./component/common/SparklesPreview";
import {SpotlightPreview} from "./component/common/SpotlightPreview";
import {TextGenerateEffectPreview} from "./component/common/TextGenerateEffectPreview";
import {LayoutGridDemo} from "./component/common/LayoutGridDemo";

function App() {
  return (
    <div className="App">
        <SpotlightPreview />
        <TimeLine />
        <SparklesPreview />
        <TextGenerateEffectPreview />
        <LayoutGridDemo />
    </div>
  );
}

export default App;

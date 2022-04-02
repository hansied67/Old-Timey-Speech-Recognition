import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { GlobalHotKeys } from "react-hotkeys";

const Dictaphone = () => {
  const {
    transcript,
    //listening,
    //resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const listenVoice = React.useCallback(() => {
    console.log("listening...");
    SpeechRecognition.startListening();
  }, []);

  const stopListening = React.useCallback(() => {
    console.log("stopping...");
    SpeechRecognition.stopListening();
  }, []);

  const handlers = {
    LISTEN: listenVoice,
    STOP: stopListening
  };

  const instructions = "Press PageUp to Listen";

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  return (
    <GlobalHotKeys handlers={handlers}>
      <div>
        {/*<p>Microphone: {listening ? 'on' : 'off'}</p>
        <button onClick={SpeechRecognition.startListening}>Start</button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
        <button onClick={resetTranscript}>Reset</button>*/}
        <p style={{fontSize: 200, fontFamily: "Silent Film", padding: 50}}>{transcript.length > 0 ? transcript : instructions}</p>
      </div>
    </GlobalHotKeys>
  );
};
export default Dictaphone;
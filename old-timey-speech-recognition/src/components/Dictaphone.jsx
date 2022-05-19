import React, { useState, useCallback, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { GlobalHotKeys } from "react-hotkeys";

const Dictaphone = () => {
  const [listening, setListening] = useState(false);  // initial state, starts as false

  const {
    transcript,
    //listening - listenToggle can't listen to this easily so states are the way to go
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const listenToggle = useCallback(() => {
    setListening((listening) => !listening);
  }, [setListening]);

  useEffect(() => {
    if (listening) {
      resetTranscript();
      console.log("listening..." + listening);
      SpeechRecognition.startListening({continuous: true});
    } else {
      console.log("stopping..." + listening);
      SpeechRecognition.stopListening();
    }
  }, [listening, resetTranscript]);

  const handlers = {
    LISTEN: listenToggle
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  return (
    <GlobalHotKeys handlers={handlers}>
      <div>
        {transcript.length > 0 ? <div contentEditable style={{fontSize: 200, fontFamily: "Silent Film", padding: 50}}>{transcript}</div> : <div contentEditable></div>}
        <p>{listening ? 'Microphone on\n(\'T\' to stop listening)' : (transcript.length > 0 ? '' : 'Press \'T\' to start listening!')}</p>
      </div>
    </GlobalHotKeys>
  );
};
export default Dictaphone;
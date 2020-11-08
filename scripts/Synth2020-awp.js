/* Declares the Synth2020 Audio Worklet Processor */

class Synth2020_AWP extends AudioWorkletGlobalScope.WAMProcessor
{
  constructor(options) {
    options = options || {}
    options.mod = AudioWorkletGlobalScope.WAM.Synth2020;
    super(options);
  }
}

registerProcessor("Synth2020", Synth2020_AWP);

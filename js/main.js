/* Här använder jag tone.js för att spela första takten ur Stranger Things-introt 
där respektive ton är programmerad till att triggas med ett jämnt intervall på 0.2 sekunder.
Melodislingan spelas direkt när du loggar in. */

const synth = new Tone.AMSynth(Tone.Synth).toDestination();
const now = Tone.now()
synth.triggerAttack("C2", now);
synth.triggerAttack("E2", now + 0.2);
synth.triggerAttack("G2", now + 0.4);
synth.triggerAttack("B2", now + 0.6);
synth.triggerAttack("C3", now + 0.8);
synth.triggerAttack("B2", now + 1);
synth.triggerAttack("G2", now + 1.2);
synth.triggerAttack("E2", now + 1.4);
synth.triggerAttack("C2", now + 1.6);
synth.triggerAttack("E2", now + 1.8);
synth.triggerAttack("G2", now + 2);
synth.triggerAttack("B2", now + 2.2);
synth.triggerAttack("C3", now + 2.4);
synth.triggerAttack("B2", now + 2.6);
synth.triggerAttack("G2", now + 2.8);
synth.triggerAttack("E2", now + 3);
synth.triggerAttack("C2", now + 3.2);
synth.triggerRelease(now + 3.6);
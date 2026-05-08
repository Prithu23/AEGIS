import tensorflow_hub as hub
import tensorflow as tf
import sounddevice as sd
import numpy as np

model = hub.load("https://tfhub.dev/google/yamnet/1")

class_map = tf.io.read_file(model.class_map_path().numpy())
names = [line.split(",")[2] for line in class_map.numpy().decode().strip().split("\n")[1:]]
print("AEGIS Active. Fluttering for noises....")

while True:
    audio = sd.rec(int(1.0*16000), samplerate=16000, channels =1 , dtype ="float32")
    sd.wait()
    audio=audio.flatten()

    scores, embeddings, spectrogram = model(audio)
    top_class = np.argmax(scores.numpy(), axis=1)
    for i in range(len(top_class)):
        label = names[top_class[i]]
        confidence = scores.numpy()[i][top_class[i]]
        if confidence > 0.3:
            print(f"We have detected a: {label} with level {confidence:.2f}")

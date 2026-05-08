from ultralytics import YOLO
import cv2
from datetime import datetime
import json

model = YOLO("yolov8n.pt")

# GPS-ready log
people_log = {}

# Set to True when GPS is connected
GPS_ENABLED = False

def get_gps():
    """Replace this with actual GPS reading later"""
    # TODO: read from ESP32/GPS module via serial
    return {"lat": 0.0, "lon": 0.0}

cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()
    if not ret:
        break

    frame = cv2.resize(frame, (640, 480))

    results = model(frame, classes=[0], conf=0.5, verbose=False)
    people_count = len(results[0].boxes)

    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    if timestamp not in people_log:
        entry = {"count": people_count}

        if GPS_ENABLED:
            gps = get_gps()
            entry["lat"] = gps["lat"]
            entry["lon"] = gps["lon"]

        people_log[timestamp] = entry
        print(f"{timestamp} | People: {people_count}")

    # Draw boxes
    for box in results[0].boxes:
        x1, y1, x2, y2 = map(int, box.xyxy[0])
        conf = float(box.conf[0])
        cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 255, 0), 2)
        cv2.putText(frame, f"Person {conf:.2f}", (x1, y1 - 10),
                    cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)

    cv2.putText(frame, f"People in frame: {people_count}", (10, 40),
                cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 3)

    cv2.imshow("VERDE - Human Count", frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()

# Save log to file
with open("people_log.json", "w") as f:
    json.dump(people_log, f, indent=2)

print("\nLog saved to people_log.json")
print(f"Total entries: {len(people_log)}")
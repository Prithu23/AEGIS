from ultralytics import YOLO
import cv2

model = YOLO("yolov8n.pt")
cap = cv2.VideoCapture("http://192.168.1.33:81/stream")

while True:
    ret, frame = cap.read()
    if not ret:
        break
    result = model(frame, verbose=False)
    count = 0 
    for box in result[0].boxes:
        if int(box.cls[0]) == 0 and float(box.conf[0]) >0.5:
            count+=1
            x1, y1, x2, y2, = map(int, box.xyxy[0])
            cv2.rectangle(frame, (x1, y1), (x2, y2), (0,255,0), 2)
    cv2.putText(frame, f"Humans:{count}", (10,40),
                cv2.FONT_HERSHEY_SIMPLEX, 1.2, (0,0,255), 3)
    
    cv2.imshow("Bratz Vision", frame)
    if cv2.waitKey(1) & 0xFF == ord("a"):
        break
cap.release()
cv2.destroyAllWindows()



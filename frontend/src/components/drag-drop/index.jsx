import {
  DndContext,
  KeyboardSensor,
  MouseSensor,
  pointerWithin,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { Droppable } from "./droppable";
import { Draggable } from "./draggble";

export const DnDLayout = () => {
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });

  const keyboardSensor = useSensor(KeyboardSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 5,
    },
  });

  const sensors = useSensors(mouseSensor, keyboardSensor);

  return (
    <div className="">
      <DndContext
        collisionDetection={pointerWithin}
        sensors={sensors}
        onDragStart={() => console.log("Drag started")}
        onDragEnd={() => console.log("Drag ended")}
      >
        <Draggable>
          <h1>Drag Me</h1>
        </Draggable>
        <Droppable>
          <h1>Drop Here</h1>
        </Droppable>
      </DndContext>
    </div>
  );
};

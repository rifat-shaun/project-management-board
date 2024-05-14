import {
  DndContext,
  KeyboardSensor,
  MouseSensor,
  pointerWithin,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

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
        <h1>Drag and Drop</h1>
      </DndContext>
    </div>
  );
};

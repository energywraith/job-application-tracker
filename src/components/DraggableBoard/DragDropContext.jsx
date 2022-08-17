import { DragDropContext as DragDropContextCore } from "react-beautiful-dnd";

const DragDropContext = ({ setColumns, children }) => {
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    const fromDroppable = +source.droppableId;
    const toDroppable = +destination.droppableId;

    if (fromDroppable === toDroppable) {
      setColumns((currentState) => {
        const items = reorder(
          currentState[fromDroppable].data,
          source.index,
          destination.index
        );

        const newState = [...currentState];
        newState[fromDroppable].data = items;

        return newState;
      });
    } else {
      setColumns((currentState) => {
        const result = move(
          currentState[fromDroppable].data,
          currentState[toDroppable].data,
          source,
          destination
        );

        const newState = [...currentState];
        newState[fromDroppable].data = result[fromDroppable];
        newState[toDroppable].data = result[toDroppable];

        return newState;
      });
    }
  };

  return (
    <DragDropContextCore onDragEnd={onDragEnd}>{children}</DragDropContextCore>
  );
};

export default DragDropContext;

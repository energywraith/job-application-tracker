import { useState, useRef, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { DragDropContext } from "react-beautiful-dnd";
import PropTypes from "prop-types";
import noop from "utils/noop";

import Row from "./Row";
import Column from "./Column";
import Item from "./Item";
import { columnsShape } from "./shapes";

const DraggableBoard = ({ columns, onChange, ...boxProps }) => {
  const [columnsState, setColumnsState] = useState(columns);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return undefined;
    }

    onChange(columnsState);
  }, [columnsState]);

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
      setColumnsState((currentState) => {
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
      setColumnsState((currentState) => {
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
    <Box {...boxProps}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Row>
          {columnsState.map((column, columnIndex) => (
            <Column key={columnIndex} column={column} index={columnIndex}>
              {column.data.map((item, itemIndex) => {
                return <Item key={item.id} item={item} index={itemIndex} />;
              })}
            </Column>
          ))}
        </Row>
      </DragDropContext>
    </Box>
  );
};

DraggableBoard.propTypes = {
  columns: columnsShape,
  onChange: PropTypes.func,
};

DraggableBoard.defaultProps = {
  columns: [],
  onChange: noop,
};

export default DraggableBoard;

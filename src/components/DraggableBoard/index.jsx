import { useState, useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types";
import noop from "utils/noop";

import DragDropContext from "./DragDropContext";
import Row from "./Row";
import Column from "./Column";
import Item from "./Item";
import { columnsShape } from "./shapes";

const DraggableBoard = ({
  columns,
  allowColumnsAdd,
  allowColumnHeaderChange,
  preventActions,
  onChange,
  onColumnAdd,
  onItemAdd,
  ...boxProps
}) => {
  const [columnsState, setColumnsState] = useState(columns);
  const firstRender = useRef(true);

  useEffect(() => {
    setColumnsState(columns);
  }, [columns]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return undefined;
    }

    onChange(columnsState);
  }, [columnsState]);

  const onColumnHeaderChange = (columnId, newHeader) => {
    setColumnsState((currentState) =>
      currentState.map((column) => {
        if (column.id === columnId) {
          return {
            ...column,
            name: newHeader,
          };
        }

        return column;
      })
    );
  };

  return (
    <Box {...boxProps}>
      <Row>
        <DragDropContext setColumns={setColumnsState}>
          {columnsState.map((column, columnIndex) => (
            <Column
              key={columnIndex}
              column={column}
              index={columnIndex}
              onHeaderChange={
                allowColumnHeaderChange ? onColumnHeaderChange : null
              }
              onAddItemClick={() =>
                onItemAdd({
                  categoryId: column.id,
                })
              }
            >
              {column.data.map((item, itemIndex) => {
                return (
                  <Item
                    key={item.id}
                    item={item}
                    index={itemIndex}
                    isDragDisabled={preventActions}
                  />
                );
              })}
            </Column>
          ))}
          {allowColumnsAdd && (
            <Column
              droppable={false}
              column={{ name: "Add new category" }}
              onHeadingClick={onColumnAdd}
            />
          )}
        </DragDropContext>
      </Row>
    </Box>
  );
};

DraggableBoard.propTypes = {
  columns: columnsShape,
  allowColumnsAdd: PropTypes.bool,
  allowColumnHeaderChange: PropTypes.bool,
  preventActions: PropTypes.bool,
  onChange: PropTypes.func,
};

DraggableBoard.defaultProps = {
  columns: [],
  allowColumnsAdd: false,
  allowColumnHeaderChange: false,
  preventActions: false,
  onChange: noop,
};

export default DraggableBoard;

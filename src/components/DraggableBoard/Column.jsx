import PropTypes from "prop-types";
import { Droppable } from "react-beautiful-dnd";
import { Box, Heading } from "@chakra-ui/react";

import { columnShape } from "./shapes";

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "whiteAlpha.200" : "whiteAlpha.100",
  height: "100%",
});

const Column = ({ column, index, children }) => {
  return (
    <Box display="flex" flexDirection="column" minHeight={50} flex="1">
      <Heading bg="whiteAlpha.300" fontSize={16} p={3} textAlign="center">
        {column.label}
      </Heading>
      <Droppable droppableId={`${index}`}>
        {(provided, snapshot) => (
          <Box
            ref={provided.innerRef}
            {...getListStyle(snapshot.isDraggingOver)}
            {...provided.droppableProps}
          >
            {children}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </Box>
  );
};

Column.propTypes = {
  column: columnShape.isRequired,
  children: PropTypes.node.isRequired,
};

export default Column;

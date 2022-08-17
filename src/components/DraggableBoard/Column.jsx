import PropTypes from "prop-types";
import { Droppable } from "react-beautiful-dnd";
import {
  Box,
  Editable,
  EditableInput,
  EditablePreview,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import ColumnHeading from "components/ColumnHeading";
import { columnShape } from "./shapes";
import noop from "utils/noop";

const getListStyle = () => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  mt: 3,
});

const Column = ({
  column,
  index,
  droppable,
  onAddItemClick,
  onHeadingClick,
  onHeaderChange,
  children,
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width={300}
      maxWidth={300}
      pr={9}
    >
      <ColumnHeading
        onClick={onHeadingClick}
        Icon={!!onHeadingClick && AddIcon}
        truncateToNoOfLines={1}
      >
        {!!onHeadingClick ? (
          column.name
        ) : (
          <Editable defaultValue={column.name}>
            <EditablePreview />
            <EditableInput
              onBlur={(e) => onHeaderChange(column.id, e.target.value)}
            />
          </Editable>
        )}
      </ColumnHeading>
      {droppable && (
        <Droppable droppableId={`${index}`}>
          {(provided) => (
            <Box
              ref={provided.innerRef}
              {...getListStyle()}
              {...provided.droppableProps}
            >
              {children}
              {provided.placeholder}
              <ColumnHeading
                onClick={() => onAddItemClick(column)}
                Icon={AddIcon}
              >
                Add a new job
              </ColumnHeading>
            </Box>
          )}
        </Droppable>
      )}
    </Box>
  );
};

Column.propTypes = {
  column: columnShape.isRequired,
  droppable: PropTypes.bool,
  onHeadingClick: PropTypes.func,
  onHeaderChange: PropTypes.func,
  children: PropTypes.node,
};

Column.defaultProps = {
  droppable: true,
  onHeadingClick: undefined,
  onHeaderChange: noop,
  children: null,
};

export default Column;

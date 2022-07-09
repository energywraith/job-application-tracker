import PropTypes from "prop-types";
import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import useTopbar from "hooks/useTopbar";
import Filters from "components/Filters";
import colorVariants from "./colorVariants";

const Table = ({
  propertyNames,
  data,
  colorVariant,
  chakraProps,
  filterFields,
  filters,
  onFiltersChange,
}) => {
  useTopbar(Filters, { filters, filterFields, onChange: onFiltersChange });

  return (
    <TableContainer {...colorVariants[colorVariant].container} {...chakraProps}>
      <ChakraTable {...colorVariants[colorVariant].table}>
        <Thead color="white">
          <Tr>
            {propertyNames.map((propertyName, index) => (
              <Th key={`}th_${index}`}>{propertyName}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((val, i) => (
            <Tr key={`tr_${i}`}>
              {propertyNames.map((p) => (
                <Td key={`td_${i}_${p}`}>{val[p] || "-"}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </ChakraTable>
    </TableContainer>
  );
};

Table.propTypes = {
  propertyNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  colorVariant: PropTypes.oneOf(["default"]),
  chakraProps: PropTypes.shape({}),
  filters: PropTypes.shape({}),
  filterFields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.oneOf(["checkbox", "select"]),
      inputProps: PropTypes.shape({
        label: PropTypes.string,
        CustomComponent: PropTypes.elementType,
        customComponentProps: PropTypes.oneOfType([
          PropTypes.func,
          PropTypes.shape({}),
        ]),
      }),
    })
  ),
};

Table.defaultProps = {
  colorVariant: "default",
  chakraProps: {},
  filters: {},
  filterFields: [],
};

export default Table;

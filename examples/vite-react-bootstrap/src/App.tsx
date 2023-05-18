import 'bootstrap/dist/css/bootstrap.css';
import {
  Button,
  ButtonGroup,
  Form,
  Col,
  FormGroup,
  InputGroup,
  Row,
  Table
} from 'react-bootstrap';
import {
  DatatableWrapper,
  Filter,
  Pagination,
  PaginationOptions,
  TableBody,
  TableColumnType,
  TableHeader
} from 'react-abstract-datatable';

import {
  faSort,
  faSortUp,
  faSortDown,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import TABLE_BODY from './data.json';

type ArrayElementType = typeof TABLE_BODY[number] & {
  button: unknown;
};

// Create table headers consisting of 4 columns.
const STORY_HEADERS: TableColumnType<ArrayElementType>[] = [
  {
    prop: 'name',
    title: 'Name',
    isFilterable: true
  },
  {
    prop: 'username',
    title: 'Username'
  },
  {
    prop: 'location',
    title: 'Location'
  },
  {
    prop: 'date',
    title: 'Last Update'
  },
  {
    prop: 'score',
    title: 'Score',
    isSortable: true
  },
  {
    prop: 'button',
    cell: (row) => (
      <Button
        variant="outline-primary"
        size="sm"
        onClick={() => {
          alert(`${row.username}'s score is ${row.score}`);
        }}
      >
        Click me
      </Button>
    )
  }
];
const STORY_BODY = TABLE_BODY as ArrayElementType[];

const ICONS = {
  sort: faSort,
  'sort-up': faSortUp,
  'sort-down': faSortDown,
  times: faTimes
};

function Icon(props: { icon: 'times' | 'sort' | 'sort-up' | 'sort-down' }) {
  console.info(props);
  return <FontAwesomeIcon icon={ICONS[props.icon]} className="fa-fw" />;
}

// Then, use it in a component.
export default function App() {
  return (
    <DatatableWrapper
      body={STORY_BODY}
      headers={STORY_HEADERS}
      paginationOptionsProps={{
        initialState: {
          rowsPerPage: 10,
          options: [5, 10, 15, 20]
        }
      }}
      tableComponents={{
        Button,
        ButtonGroup,
        Checkbox: Form.Check,
        Col,
        FormControl: Form.Control,
        FormGroup,
        HelperText: Form.Text,
        Icon,
        InputGroup,
        Label: Form.Label,
        Row,
        Select: Form.Select,
        Table
      }}
    >
      <Row className="mb-4 p-2">
        <Col
          xs={12}
          lg={4}
          className="d-flex flex-col justify-content-end align-items-end"
        >
          <Filter />
        </Col>
        <Col
          xs={12}
          sm={6}
          lg={4}
          className="d-flex flex-col justify-content-lg-center align-items-center justify-content-sm-start mb-2 mb-sm-0"
        >
          <PaginationOptions />
        </Col>
        <Col
          xs={12}
          sm={6}
          lg={4}
          className="d-flex flex-col justify-content-end align-items-end"
        >
          <Pagination />
        </Col>
      </Row>
      <Table>
        <TableHeader />
        <TableBody />
      </Table>
    </DatatableWrapper>
  );
}

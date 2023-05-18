# React Abstract Datatable

[![minzipped size](https://img.shields.io/bundlephobia/minzip/react-abstract-datatable)](https://bundlephobia.com/package/react-abstract-datatable) [![npm version](https://badge.fury.io/js/react-abstract-datatable.svg)](https://badge.fury.io/js/react-abstract-datatable) [![downloads per week](https://img.shields.io/npm/dw/react-abstract-datatable)](https://www.npmjs.com/package/react-abstract-datatable)

Initially, I created [react-bs-datatable](https://github.com/imballinst/react-bs-datatable) with support only for Bootstrap. Along the way, I made the Datatable to be extensible as well using other libraries, such as Material UI. However, I felt like it added unnecessary noise to the repository, so I removed it in version 3.

This component-library-agnostic library will be used as the core of react-bs-datatable.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Storybook Demo](#storybook-demo)
- [API reference](#api-reference)
- [Contributing](#contributing)

## Installation

With `npm`:

```bash
npm install --save react-abstract-datatable
```

With `yarn`:

```
yarn add react-abstract-datatable
```

## Usage

For more complete examples, please visit this sandbox link (https://codesandbox.io/s/react-abstract-datatable-3-typescript-bn234b) or the Storybook demo (https://imballinst.github.io/react-abstract-datatable).

For example, to use it with Bootstrap:

```jsx
import React from 'react';
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

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  faSort,
  faSortUp,
  faSortDown,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ICONS = {
  sort: faSort,
  'sort-up': faSortUp,
  'sort-down': faSortDown,
  times: faTimes
};

function Icon(props: { icon: 'times' | 'sort' | 'sort-up' | 'sort-down' }) {
  return <FontAwesomeIcon icon={ICONS[props.icon]} className="fa-fw" />;
}

// Create table headers consisting of 4 columns.
const header = [
  { title: 'Username', prop: 'username' },
  { title: 'Name', prop: 'realname' },
  { title: 'Location', prop: 'location' }
];

// Randomize data of the table columns.
// Note that the fields are all using the `prop` field of the headers.
const body = Array.from(new Array(57), () => {
  const rd = (Math.random() * 10).toFixed(1);

  if (rd > 0.5) {
    return {
      username: 'i-am-billy',
      realname: `Billy ${rd}`,
      location: 'Mars'
    };
  }

  return {
    username: 'john-nhoj',
    realname: `John ${rd}`,
    location: 'Saturn'
  };
});

// Then, use it in a component.
function TableComponent() {
  return (
    <DatatableWrapper
      body={body}
      headers={headers}
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
      <Row className="mb-4">
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
          <PaginationOpts />
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
```

## Storybook Demo

Head to https://imballinst.github.io/react-abstract-datatable to see all of the features in action.

## API Reference

Visit the [API reference](./api/README.md) for more details.

## Contributing

Feel free to contribute by creating issues and/or pull requests. I will do my best to address them as fast as I can.

## License

See license in [LICENSE](./LICENSE).

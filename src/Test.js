import React from 'react';

import { Form,Button } from 'antd';
const FormItem = Form.Item;

class Test extends React.Component {
  render() {
    return (
      <Button>Hello World!!!</Button>
    );
  }
}

const WrappedTest = Form.create()(Test);

export default WrappedTest; //It will throw an exception

//export default Test; //It works fine
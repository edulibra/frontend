import React from 'react';
import Translate from 'i18n';
import FormCommon from 'schema-form/common';
import { Form, Icon, Button, Input } from 'antd';
import { connect } from 'react-redux';

const FormItem = Form.Item;

/**
 * Created by edulibra.org@gmail.com
 * Email: edulibra.org@gmail.com
 **/
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onFormRequest = (event) => {
    const options = FormCommon.submitOptions;
    options.networkMethod = 'postAsForm';

    FormCommon.submitForm(event, this.props.form, options);
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="ui-my-component">
        <Form className="ui-my-component-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: Translate.t1('Please enter your username!') }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder={Translate.t1('username')}
              />,
            )}
          </FormItem>

          <Button type="primary" onClick={this.onFormRequest} className="login-form-button">
            {Translate.t1('Login')}
          </Button>
        </Form>
      </div>
    );
  }
}

export default connect()(Form.create()(MyComponent));

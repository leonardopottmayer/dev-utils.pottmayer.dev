import { useState } from "react";
import DefaultPage from "@/components/page/DefaultPage";
import { Button, Checkbox, Form, Input, InputNumber } from "antd";

type FormBodyData = {
  useMinimalLetters: boolean;
  useCapitalLetters: boolean;
  useSpecialCharacters: boolean;
  useNumbers: boolean;
  passwordLength: number;
};

const PSW001 = () => {
  const [generatedPassword, setGeneratedPassword] = useState<string>("");

  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^&*()-_+=[]{}|;:,.<>?";

  const generatePassword = (
    useMinimalLetters = true,
    useCapitalLetters = true,
    useSpecialCharacters = true,
    useNumbers = true,
    passwordLength = 12
  ): string => {
    let validChars = "";

    if (useMinimalLetters) {
      validChars += lowerCaseLetters;
    }

    if (useCapitalLetters) {
      validChars += upperCaseLetters;
    }

    if (useSpecialCharacters) {
      validChars += specialCharacters;
    }

    if (useNumbers) {
      validChars += numbers;
    }

    if (validChars === "") {
      return "No characters set option selected.";
    }

    let password = "";

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      password += validChars.charAt(randomIndex);
    }

    return password;
  };

  const onFormFinish = (values: FormBodyData) => {
    if (values.passwordLength < 1) {
      setGeneratedPassword("Password length must be at least 1");
      return;
    }

    const password = generatePassword(
      values.useMinimalLetters,
      values.useCapitalLetters,
      values.useSpecialCharacters,
      values.useNumbers,
      values.passwordLength
    );

    setGeneratedPassword(password);
  };

  const onFormFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <DefaultPage code="PSW001" name="Password generator">
      <Form
        layout="vertical"
        name="psw001_form"
        initialValues={{
          useMinimalLetters: true,
          useCapitalLetters: true,
          useSpecialCharacters: true,
          useNumbers: true,
          passwordLength: 8,
        }}
        onFinish={onFormFinish}
        onFinishFailed={onFormFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FormBodyData>
          label="Password length"
          name="passwordLength"
          rules={[
            { required: true, message: "Please input the password length!" },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item<FormBodyData>
          name="useSpecialCharacters"
          valuePropName="checked"
        >
          <Checkbox>Use special characters</Checkbox>
        </Form.Item>

        <Form.Item<FormBodyData>
          name="useCapitalLetters"
          valuePropName="checked"
        >
          <Checkbox>Use capital letters</Checkbox>
        </Form.Item>

        <Form.Item<FormBodyData>
          name="useMinimalLetters"
          valuePropName="checked"
        >
          <Checkbox>Use minimal letters</Checkbox>
        </Form.Item>

        <Form.Item<FormBodyData> name="useNumbers" valuePropName="checked">
          <Checkbox>Use numbers</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Generate password
          </Button>
        </Form.Item>
      </Form>

      <Input disabled={true} value={generatedPassword} />
    </DefaultPage>
  );
};

export default PSW001;

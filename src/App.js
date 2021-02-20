import {
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Checkbox,
  Text,
  Flex,
  Button,
  Link,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  FormErrorMessage,
  FormControl,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogBody,
  AlertDialogCloseButton,
} from "@chakra-ui/core";
import { Formik, Field } from "formik";
import { useState } from "react";
import * as yup from "yup";
import { FaUserAlt, FaLock, FaMobileAlt } from "react-icons/fa";
import axios from "axios";

function App() {
  const [isShow, setIsShow] = useState(false);
  const [dialogContent, setDialogContent] = useState([]);

  function login(data) {
    axios
      .post("https://conduit.productionready.io/api/users/login", { user: { ...data } })
      .then(function (response) {
        if (response.data.user) setDialogContent([{ success: "恭喜登录成功!!!" }]);
      })
      .catch(function (error) {
        if (error.response.data.errors) setDialogContent([error.response.data.errors]);
      });
  }
  function register(data) {
    axios
      .post("https://conduit.productionready.io/api/users", { user: { ...data } })
      .then(function (response) {
        if (response.data.user) setDialogContent([{ success: "恭喜注册成功!!!" }]);
      })
      .catch(function (error) {
        if (error.response.data.errors) setDialogContent([error.response.data.errors]);
      });
  }

  return (
    <Stack
      spacing="4"
      padding="50px"
      width="400px"
      margin="50px auto 0"
      border="1px solid #eee"
      boxShadow="md"
    >
      <Tabs color="#969696" variant="line">
        <TabList alignItems="center" borderBottom="none" justifyContent="center">
          <Tab _selected={{ color: "#ea6f5a", borderBottom: "2px solid #ea6f5a" }}>登录</Tab>
          <Text fontWeight="bold">·</Text>
          <Tab _selected={{ color: "#ea6f5a", borderBottom: "2px solid #ea6f5a" }}>注册</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={login}
              validationSchema={yup.object().shape({
                email: yup.string("请输入字符串").required("请输入账号名"),
                password: yup.string("请输入字符串").required("请输入密码"),
              })}
            >
              {(props) => (
                <form onSubmit={props.handleSubmit}>
                  <Stack spacing="5">
                    <Stack spacing="0">
                      <Field name="email">
                        {({ field, form }) => (
                          <FormControl isInvalid={form.errors.email && form.touched.email}>
                            <InputGroup>
                              <InputLeftAddon children={<FaUserAlt />} />
                              <Input {...field} name="email" placeholder="手机号或邮箱" />
                            </InputGroup>
                            <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                      <Field name="password">
                        {({ field, form }) => (
                          <FormControl isInvalid={form.errors.password && form.touched.password}>
                            <InputGroup>
                              <InputLeftAddon children={<FaLock />} />
                              <Input
                                {...field}
                                type="password"
                                name="password"
                                placeholder="密码"
                              />
                            </InputGroup>
                            <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    </Stack>
                    <Flex justify="space-between">
                      <Checkbox defaultIsChecked>记住我</Checkbox>
                      <Text
                        fontSize="md"
                        position="relative"
                        cursor="pointer"
                        onClick={() => setIsShow(!isShow)}
                      >
                        登录遇到问题?
                        {isShow ? (
                          <Flex
                            position="absolute"
                            direction="column"
                            bg="#fff"
                            border="1px solid #eee"
                            width="200px"
                            zIndex="2"
                            color="#333"
                            padding="10px"
                          >
                            <Link
                              cursor="pointer"
                              isExternal
                              _hover={{ textDecoration: "none" }}
                              href="https://www.jianshu.com/users/password/mobile_reset"
                            >
                              用手机号重置密码
                            </Link>
                            <Link
                              cursor="pointer"
                              isExternal
                              _hover={{ textDecoration: "none" }}
                              href="https://www.jianshu.com/users/password/email_reset"
                            >
                              用邮箱重置密码
                            </Link>
                            <Link
                              cursor="pointer"
                              isExternal
                              _hover={{ textDecoration: "none" }}
                              href="https://www.jianshu.com/p/9058d0b8711d"
                            >
                              无法用海外手机号登录
                            </Link>
                            <Link
                              cursor="pointer"
                              isExternal
                              _hover={{ textDecoration: "none" }}
                              href="https://www.jianshu.com/p/498a9fa7da08"
                            >
                              无法用 Google 帐号登录
                            </Link>
                          </Flex>
                        ) : null}
                      </Text>
                    </Flex>

                    <Button
                      width="100%"
                      type="submit"
                      bg="#3194d0"
                      color="#fff"
                      borderRadius="25px"
                      _hover={{ bg: "#187cb7" }}
                    >
                      登录
                    </Button>
                  </Stack>
                </form>
              )}
            </Formik>
          </TabPanel>
          <TabPanel>
            <Formik
              initialValues={{ username: "", email: "", password: "" }}
              onSubmit={register}
              validationSchema={yup.object().shape({
                username: yup.string("”请输入字符串").required("请输入用户名"),
                email: yup.string("请输入字符串").required("请输入账号名"),
                password: yup.string("请输入字符串").required("请输入密码"),
              })}
            >
              {(props) => (
                <form onSubmit={props.handleSubmit}>
                  <Stack spacing="5">
                    <Stack
                      spacing="0"
                      border="1px solid #c8c8c8"
                      borderRadius="md"
                      borderColor="gray.200"
                    >
                      <Field name="username">
                        {({ field, form }) => (
                          <FormControl isInvalid={form.errors.username && form.touched.username}>
                            <InputGroup>
                              <InputLeftAddon children={<FaUserAlt />} />
                              <Input {...field} name="username" placeholder="你的昵称" />
                            </InputGroup>
                            <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                      <Field name="email">
                        {({ field, form }) => (
                          <FormControl isInvalid={form.errors.email && form.touched.email}>
                            <InputGroup>
                              <InputLeftAddon children={<FaMobileAlt />} />
                              <Input {...field} name="email" placeholder="邮件" />
                            </InputGroup>
                            <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                      <Field name="password">
                        {({ field, form }) => (
                          <FormControl isInvalid={form.errors.password && form.touched.password}>
                            <InputGroup>
                              <InputLeftAddon children={<FaLock />} />
                              <Input
                                {...field}
                                type="password"
                                name="password"
                                placeholder="密码"
                              />
                            </InputGroup>
                            <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    </Stack>

                    <Button
                      type="submit"
                      width="100%"
                      bg="#42c02e"
                      color="#fff"
                      borderRadius="25px"
                      _hover={{ bg: "#3db922" }}
                    >
                      注册
                    </Button>
                    <Text textAlign="center" fontSize="12px">
                      点击 “注册” 即表示您同意并愿意遵守简书
                      <br />
                      <Link color="#3194d0" isExternal href="http://www.jianshu.com/p/c44d171298ce">
                        用户协议
                      </Link>
                      和
                      <Link color="#3194d0" isExternal href="http://www.jianshu.com/p/2ov8x3">
                        隐私政策
                      </Link>
                    </Text>
                  </Stack>
                </form>
              )}
            </Formik>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <AlertDialog isOpen={dialogContent.length > 0} onClose={() => setDialogContent([])}>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogCloseButton />
          <AlertDialogBody
            dangerouslySetInnerHTML={{
              __html: dialogContent.map((item) => {
                let html = "";
                for (let key in item) {
                  html += `${key}:${item[key]} <br/>`;
                }
                return html;
              }),
            }}
          />
        </AlertDialogContent>
      </AlertDialog>
    </Stack>
  );
}

export default App;

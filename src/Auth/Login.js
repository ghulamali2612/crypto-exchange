import { Button, FloatingLabel, Form, Stack } from "react-bootstrap";

export default function Login(props) {

  const validate = (e) => {
    e.preventDefault();
    const user = props.users.filter((user) => {
      return user.email === e.target.email.value;
    })[0]

    if (user == null) {
      alert("Invalid credentials.");
    } else if (user.failedAttempts >= 3) {
      alert(user.name + "has been block due to too many invalid attempts.");
    } else if (user.password === e.target.password.value) {
      alert("User successfully logged in.");
    } else {
      user.failedAttempts++;
      props.failedAttempt(user)
      alert("too many attempts");
    }
  }

  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-md-5 mx-auto">
                    <h1>Login</h1>
                    <Form className="text-dark" onSubmit={validate}>
                        <Stack>
                        <Form.Group>
                            <FloatingLabel
                            controlId="email"
                            label="Email address"
                            className="mb-3"
                            >
                            <Form.Control type="email" placeholder="name@example.com" />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group>
                            <FloatingLabel controlId="password" label="Password">
                            <Form.Control type="password" placeholder="Password" />
                            </FloatingLabel>
                        </Form.Group>
                        <Button className="mt-2" type="submit" variant="dark">Login</Button>
                        </Stack>
                    </Form>
                </div>
            </div>
        </div>
    </>
  );
}
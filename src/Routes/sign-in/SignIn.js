import { signInWithGooglePopUp } from "../../utils/firebase/firebase";

function SignIn() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopUp();
    console.log(response);
  };
  return (
    <div>
      <h1>i am signin</h1>
      <button onClick={logGoogleUser}>Sign In With Google</button>
    </div>
  );
}

export default SignIn;

import { useContext } from "../../deps.ts";
import StdoutContext from "../components/StdoutContext.ts";

/**
 * `useStdout` is a React hook, which exposes stdout stream.
 */
const useStdout = () => useContext(StdoutContext);
export default useStdout;

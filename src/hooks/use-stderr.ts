import { useContext } from "../../deps.ts";
import StderrContext from "../components/StderrContext.ts";

/**
 * `useStderr` is a React hook, which exposes stderr stream.
 */
const useStderr = () => useContext(StderrContext);
export default useStderr;

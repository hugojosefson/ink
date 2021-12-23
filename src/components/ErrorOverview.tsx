import { FC, React } from "../../deps.ts";
import Box from "./Box.tsx";
import Text from "./Text.tsx";

interface Props {
  readonly error: Error;
}

const ErrorOverview: FC<Props> = ({ error }) => {
  return (
    <Box flexDirection="column" padding={1}>
      <Box>
        <Text backgroundColor="red" color="white">
          {" "}
          ERROR{" "}
        </Text>

        <Text>{error.message}</Text>
      </Box>

      {error.stack && (
        <Box marginTop={1} flexDirection="column">
          {error.stack
            .split("\n")
            .slice(1)
            .map((line) => {
              return (
                <Box key={line}>
                  <Text dimColor>-</Text>
                  <Text dimColor bold>
                    {line}
                  </Text>
                </Box>
              );
            })}
        </Box>
      )}
    </Box>
  );
};

export default ErrorOverview;

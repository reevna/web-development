PROGRAM PrintHello(INPUT, OUTPUT);
USES
  DOS;
VAR
  UserName: string;
BEGIN{PrintHello}
  WRITELN('Content-Type: text/plain');
  WRITELN;
  UserName:= (GetEnv('QUERY_STRING'));
  Delete(UserName, 1, 5);
  IF Length(UserName) <> 0
  THEN
    WRITELN('Hello dear ', UserName, '!')
  ELSE
    WRITELN('Hello Anonymous!')
END.

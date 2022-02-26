PROGRAM SarahRevere(INPUT, OUTPUT);
USES Dos;
VAR
  Lanterns: string;
BEGIN
  WRITELN('Content-Type: text/plain');
  WRITELN;
  WRITELN('REQUEST_METHOD');
  WRITELN(GetEnv('QUERY_STRING'));
  WRITELN('CONTNT_LENGTH');
  WRITELN('HTTP_USER_AGENT');
  WRITELN('HTTP_HOST');
  Lanterns:= (GetEnv('QUERY_STRING'));
  Delete(Lanterns, 1, 9);
  IF Lanterns = '1'
  THEN
    WRITELN('The British are coming by land.')
  ELSE
    IF Lanterns = '2'
    THEN
      WRITELN('The British are coming by sea.')
    ELSE
      WRITELN('The North Church shows nothing')
END.


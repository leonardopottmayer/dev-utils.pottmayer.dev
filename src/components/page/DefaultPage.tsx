export type DefaultPageProps = {
  code: string;
  name: string;
  children?: string | JSX.Element | JSX.Element[];
};

const DefaultPage = (props: DefaultPageProps) => {
  return (
    <div>
      <div>
        {props.code} - {props.name}
      </div>
      {props.children}
    </div>
  );
};

export default DefaultPage;

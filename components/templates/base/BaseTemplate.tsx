import { createStyles } from '@mantine/core';

export interface IBaseTemplate {
  sampleTextProp: string;
}

const useStyles = createStyles((theme) => ({
  base: {},
}));

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  const { classes, cx } = useStyles();

  return <div className={classes.base}>{sampleTextProp}</div>;
};

export default BaseTemplate;

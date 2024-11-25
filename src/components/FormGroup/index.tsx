import Flex from '@@components/Flex';
import { FormGroupProps } from '@@components/FormGroup/types';
import Typography from '@@components/Typography';

function FormGroup({ label, children, ...props }: FormGroupProps) {
  return (
    <Flex.Vertical gap={4} {...props}>
      {label && (
        <Typography.Body3 fontWeight={400} fontSize='16px'>
          {label}
        </Typography.Body3>
      )}
      {children}
    </Flex.Vertical>
  );
}

export default FormGroup;

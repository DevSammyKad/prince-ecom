import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>
          <Loader2 className="mr-2 h-4 w-4 animate-spin " /> Product Creating
        </Button>
      ) : (
        <Button variant="default" size="lg" type="submit" className="my-5">
          Create Product
        </Button>
      )}
    </>
  );
};
export default SubmitButton;

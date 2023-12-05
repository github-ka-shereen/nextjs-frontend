import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  id: string;
  title: string;

  image: string;
  downloadNumber: number;
}

const ResourceCard = ({ id, title, downloadNumber, image }: Props) => {
  return (
    <Card className='w-full max-w-fit border0 !bg-transparent sm:ma-w-[356px]'>
      <Link href={`/resource/${id}`}>
        <CardHeader className='flex-center flex-col gap-2,5 !p-0'>
          <div className='h-fit w-full'>
            <Image
              src={image}
              className='h-full rounded-md object-cover'
              width={384}
              height={440}
              alt={title}
            />
          </div>
          <CardTitle
            className='text-white paragraph-semibold
          line-clamp-1 w-full text-left
          '
          >
            {title}
          </CardTitle>
        </CardHeader>
      </Link>
      <CardContent className='flext-between mt-4 p-0'>
        <div className='flex-center body-medium gap-1.5 text-white'>
          <Image src='/downloads.svg' width={20} height={20} alt='download' />
          {downloadNumber}
        </div>
        <Link
          className='flex-center text-gradient_purple-blue body-semibold gap-1.5'
          href={`/resource/${id}`}
        >
          Download Now
          <Image
            src='/arrow-blue.svg'
            width={13}
            height={0}
            alt='arrow'
          ></Image>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
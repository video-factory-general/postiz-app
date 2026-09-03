import { VideosComponent } from '@gitroom/frontend/components/videos/videos.component';
import { Metadata } from 'next';
import { isGeneralServerSide } from '@gitroom/helpers/utils/is.general.server.side';

export const metadata: Metadata = {
  title: `${isGeneralServerSide() ? 'News Factory' : 'Gitroom'} Videos`,
  description: '',
};

export default async function Page() {
  return <VideosComponent />;
}

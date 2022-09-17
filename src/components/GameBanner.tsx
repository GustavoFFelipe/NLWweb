

interface GameBannerProps{
    bannerUrl: string;
    title: string;
    adsAcount: number;
}

export function GameBanner({bannerUrl, title, adsAcount}: GameBannerProps){
    return(
        <a href="" className="relative rounded-lg overflow-hidden">
        <img src={bannerUrl} alt="" />
        <div className="w-full pt-16 pb-4 px-4 bg-gameGradiant absolute bottom-0 left-0 right-0">
          <strong className="font-bold block text-white">{title}</strong>
          <span className='text-zinc-300 text-sm block mt-1'>{adsAcount} anúnicio(s)</span>
        </div>
      </a>
    )
}
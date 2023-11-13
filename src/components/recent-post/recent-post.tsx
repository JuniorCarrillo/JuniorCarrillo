import {useTranslation} from "react-i18next";
import {CalendarIcon} from '@heroicons/react/20/solid'
import moment from "moment";
import React from "react";
import {useApi} from "../../infrastructure/context/ApiProvider";

export default function RecentPost() {
  const { blog } = useApi();
  const { t } = useTranslation();

  if (!blog.items) {
    return null;
  }

  return (
    <div className="max-w-full mb-5">
      <div className="bg-brand-accent py-2 px-4 rounded-t">
        <h4 className="font-black text-2xl text-brand-dark">
          {t('general:widgets.recent-post.title')}
        </h4>
      </div>
      <div className="py-2 px-4 bg-gray-900">
        {blog.items.slice(-3).map((it, i) => (
          <div key={i} className="hover:opacity-100 opacity-80 mt-1 mb-4 border-b-2 pb-3 border-gray-800 transition duration-300 delay-75 cursor-pointer">
            <small className="bg-red-500 py-1 px-2 rounded" dangerouslySetInnerHTML={{__html: it.tags[0]}} />
            <h5 className="mt-2 font-bold text-brand-accent line-clamp-2">{it.title}</h5>
            <small className="text-xs flex gap-1 items-center my-1">
              <CalendarIcon className="h-4 w-4 flex-none text-gray-400" aria-hidden="true" /> {moment(it.date_published).format('lll')}
            </small>
            <p className="text-xs line-clamp-3" dangerouslySetInnerHTML={{__html: it.content_html}} />
          </div>
        ))}
      </div>
      <div className="bg-gray-800 rounded-b py-2 px-4 text-xs flex justify-center">
        <div className="underline cursor-pointer text-gray-400">
          {t('general:widgets.recent-post.read-more')} - {moment().format('lll')}
        </div>
      </div>
    </div>
  )
}

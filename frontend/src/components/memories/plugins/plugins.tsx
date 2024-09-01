import { PluginsResult } from '@/src/types/memory.types';
import Markdown from 'markdown-to-jsx';
import { Suspense } from 'react';
import IndentifyPlugin from '../../plugins/indentify-plugin';
import IdentifyPluginLoader from '../../plugins/identify-plugin-loader';

interface PluginsProps {
  plugins: PluginsResult[];
}

export default function Plugins({ plugins }: PluginsProps) {
  return (
    <div className="h-auto">
      <h3 className="px-4 text-xl font-semibold md:px-12 md:text-2xl">Plugins</h3>
      <div className="mt-3 flex flex-col gap-8">
        {plugins.map((puglin, index) => {
          return (
            <div key={index}>
              <Suspense fallback={<IdentifyPluginLoader />}>
                <IndentifyPlugin pluginId={puglin.plugin_id} />
              </Suspense>
              <div className="bg-[#0f0f0f] px-4 md:px-12">
                <Markdown className="prose md:prose-lg prose-slate text-white prose-p:m-0 prose-p:mt-3 prose-p:text-white last:prose-p:mt-8 last:prose-p:rounded-lg last:prose-p:bg-zinc-900 last:prose-p:p-2 last:prose-p:px-4 md:last:prose-p:text-sm last:prose-p:text-zinc-300 prose-strong:text-white prose-ul:my-0 prose-ul:list-disc prose-li:text-zinc-400">
                  {puglin.content}
                </Markdown>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

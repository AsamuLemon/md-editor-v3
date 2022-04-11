import { defineComponent, onMounted, PropType, ref, watch } from 'vue';
import Editor, { HeadList } from 'md-editor-v3';
import { Theme } from '../../App';
import axios from '@/utils/request';
import { version } from '../../../package.json';
// import Catalog from '@/components/Catalog';
import { Affix } from 'ant-design-vue';
import { useStore } from 'vuex';

const Catalog = Editor.Catalog;

export default defineComponent({
  props: {
    theme: String as PropType<Theme>
  },
  setup() {
    const mdText = ref();
    const catalogList = ref<Array<HeadList>>([]);
    const store = useStore();

    const queryMd = () => {
      axios
        .get(`/doc-${store.state.lang}.md`)
        .then(({ data }) => {
          mdText.value = (data as string).replace(/\$\{EDITOR_VERSION\}/g, version);
        })
        .catch((e) => {
          console.log(e);

          mdText.value = '文档读取失败！';
        });
    };

    onMounted(queryMd);
    watch(() => store.state.lang, queryMd);

    return () => (
      <div class="container">
        <div class="doc">
          <div class="content">
            <Editor
              editorId="doc-preview"
              theme={store.state.theme}
              language={store.state.lang}
              modelValue={mdText.value}
              previewTheme={store.state.previewTheme}
              previewOnly
              showCodeRowNumber
              onGetCatalog={(arr: any[]) => {
                catalogList.value = arr;
              }}
            />
          </div>
          <div class="catalog">
            <Affix offsetTop={16}>
              {/* <Catalog heads={catalogList.value} /> */}
              <Catalog
                editorId="doc-preview"
                theme={store.state.theme}
                scrollElement={document.documentElement}
              />
            </Affix>
          </div>
        </div>
      </div>
    );
  }
});

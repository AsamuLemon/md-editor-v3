import { defineComponent, PropType } from 'vue';
import './index.less';
import { Theme } from '../App';

export default defineComponent({
  props: {
    theme: String as PropType<Theme>,
    onChange: {
      type: Function as PropType<(v: Theme) => void>,
      default: () => {}
    },
    onPreviewChange: {
      type: Function as PropType<(v: string) => void>,
      default: () => {}
    },
    onCodeCssNameChange: {
      type: Function as PropType<(v: string) => void>,
      default: () => {}
    }
  },
  setup(props) {
    return () => (
      <header class="page-header">
        <section class="container">
          <p class="header-actions">
            <button class="btn btn-header" onClick={() => props.onChange('light')}>
              亮模式
            </button>
            <button class="btn btn-header" onClick={() => props.onChange('dark')}>
              暗模式
            </button>
          </p>
          <p class="header-actions">
            <button
              class="btn btn-header"
              onClick={() => props.onPreviewChange('default')}
            >
              default
            </button>
            <button
              class="btn btn-header"
              onClick={() => props.onPreviewChange('github')}
            >
              cyanosis
            </button>
            <button
              class="btn btn-header"
              onClick={() => props.onPreviewChange('github')}
            >
              github
            </button>
            <button
              class="btn btn-header"
              onClick={() => props.onPreviewChange('mk-cute')}
            >
              mk-cute
            </button>
            <button
              class="btn btn-header"
              onClick={() => props.onPreviewChange('smart-blue')}
            >
              smart-blue
            </button>
            <button
              class="btn btn-header"
              onClick={() => props.onPreviewChange('vuepress')}
            >
              vuepress
            </button>
          </p>
          <p class="header-actions">
            <button
              class="btn btn-header"
              onClick={() => props.onCodeCssNameChange('a11y')}
            >
              a11y
            </button>
            <button
              class="btn btn-header"
              onClick={() => props.onCodeCssNameChange('atom')}
            >
              atom-one
            </button>
            <button
              class="btn btn-header"
              onClick={() => props.onCodeCssNameChange('github')}
            >
              github
            </button>
            <button
              class="btn btn-header"
              onClick={() => props.onCodeCssNameChange('gradient')}
            >
              gradient
            </button>
            <button
              class="btn btn-header"
              onClick={() => props.onCodeCssNameChange('tokyo-night')}
            >
              tokyo-night
            </button>
          </p>
        </section>
      </header>
    );
  }
});

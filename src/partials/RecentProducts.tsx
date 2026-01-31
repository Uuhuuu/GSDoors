import type { MarkdownInstance } from "astro";
import type { IFrontmatter } from "astro-boilerplate-components";
import {
  BlogGallery,
  GradientText,
  Section,
} from "astro-boilerplate-components";

type IRecentPostsProps = {
  postList: MarkdownInstance<IFrontmatter>[];
};

const RecentProducts = (props: IRecentPostsProps) => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
          Available{" "}
          <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
            Products
          </span>
        </div>

        <div className="text-sm">
          <a href="/products/">Whole offer ⇨</a>
        </div>
      </div>
    }
  >
    <BlogGallery postList={props.postList} />
  </Section>
);

export { RecentProducts };

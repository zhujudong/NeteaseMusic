export interface MenuProps {
  currentPath: string;
  menuList: Array<{
    title: string;
    href: string;
  }>;
}

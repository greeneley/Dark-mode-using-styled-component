# Dark mode using styled-component

Để implementation dark mode, chúng ta sử dụng các hàm sau:

1. Themes (`themes.js`): chứa các thuộc tính cho 2 chế độ light và dark mode
2. GlobalStyles: được tạo từ `createGlobalStyle` API của styled-component
3. ThemeProvider: API của styled-component


Flow chính: 

ThemeProvider --> GlobalStyles -> component nhận thuộc tính theme để điều chỉnh mode

Bên cạnh các hàm ở trên, chúng ta sử dụng toggler để bật/tắt dark mode

- `ThemeProvider` là một helper component của thư viện styled-components, nó bọc tất cả mọi thứ bên trong nó, nhúng một thuộc tính theme vào children component.
- Bên trong `ThemeProvider`, chúng ta s dụng `GlobalStyles` inject global styles vào các component con. 2 cái này đi song song nhau.
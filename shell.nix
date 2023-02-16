let
  pkgs = import <nixpkgs> {};
in
pkgs.mkShell {
  buildInputs = with pkgs; [
    git
    nodejs-19_x
    nodejs-19_x.pkgs.eslint
    nodejs-19_x.pkgs.pnpm
    nodejs-19_x.pkgs.typescript
  ];
}

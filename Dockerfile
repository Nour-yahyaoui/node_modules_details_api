# Node Modules Details API — Rust + Actix Web
#
# The dataset (data.json) and the docs UI (public/index.html) are embedded in
# the binary at compile time, so the runtime image only ships the executable.

# ---- build stage ----
FROM rust:1-slim AS builder
WORKDIR /app

# Build dependencies first so they stay cached across source changes.
COPY Cargo.toml ./
RUN mkdir -p src && \
    echo "pub fn placeholder() {}" > src/lib.rs && \
    echo "fn main() {}" > src/main.rs && \
    cargo build --release && \
    rm -rf src

COPY src ./src
COPY public ./public
COPY data.json ./
RUN touch src/lib.rs src/main.rs && cargo build --release

# ---- runtime stage ----
FROM debian:bookworm-slim
COPY --from=builder /app/target/release/node-modules-details-api /usr/local/bin/node-modules-details-api

ENV HOST=0.0.0.0
EXPOSE 3000
CMD ["node-modules-details-api"]

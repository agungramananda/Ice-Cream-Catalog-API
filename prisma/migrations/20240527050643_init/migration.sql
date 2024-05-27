-- CreateTable
CREATE TABLE `iceCream` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `type_id` INTEGER NOT NULL,
    `size_id` INTEGER NOT NULL,
    `topping_id` INTEGER NULL,
    `price` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `images` VARCHAR(191) NULL,

    UNIQUE INDEX `iceCream_type_id_key`(`type_id`),
    UNIQUE INDEX `iceCream_size_id_key`(`size_id`),
    UNIQUE INDEX `iceCream_topping_id_key`(`topping_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Types` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Flavors` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `flavor` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Toppings` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `topping` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sizes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `size` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `IceCreamFlavors` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `flavor_id` INTEGER NOT NULL,
    `ice_cream_id` INTEGER NOT NULL,

    INDEX `IceCreamFlavors_flavor_id_ice_cream_id_idx`(`flavor_id`, `ice_cream_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `iceCream` ADD CONSTRAINT `iceCream_type_id_fkey` FOREIGN KEY (`type_id`) REFERENCES `Types`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `iceCream` ADD CONSTRAINT `iceCream_size_id_fkey` FOREIGN KEY (`size_id`) REFERENCES `Sizes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `iceCream` ADD CONSTRAINT `iceCream_topping_id_fkey` FOREIGN KEY (`topping_id`) REFERENCES `Toppings`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `IceCreamFlavors` ADD CONSTRAINT `IceCreamFlavors_flavor_id_fkey` FOREIGN KEY (`flavor_id`) REFERENCES `Flavors`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `IceCreamFlavors` ADD CONSTRAINT `IceCreamFlavors_ice_cream_id_fkey` FOREIGN KEY (`ice_cream_id`) REFERENCES `iceCream`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
